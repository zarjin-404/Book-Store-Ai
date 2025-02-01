import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import JWT from 'jsonwebtoken'
import userModels from '../models/user.models.js'
dotenv.config()

export const registerUser = async (req, res) => {
  const { fullname, username, email, password } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const user = await userModels.create({
      fullname,
      username,
      email,
      password: hashPassword,
      profile: req.file.path,
    })

    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    )
    res.cookie('token', token)
    await user.save()
    res.status(200).json({ message: 'user registered successfully', user })
  } catch (error) {
    res.status(500).json({ message: 'user registered unsuccessfully' })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await userModels.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }

    const Compare = await bcrypt.compare(password, user.password)

    if (!Compare) {
      return res.status(401).json({ message: 'something wrong' })
    }
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
    )
    res.cookie('token', token)
    res.status(200).json({
      message: 'user login successfully',
      user: {
        fullname: user.fullname,
        username: user.username,
        email: user.email,
      },
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await userModels.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
    res.status(200).json({ message: 'user updated successfully', user })
  } catch (error) {
    res.status(500).json({ message: 'user updated unsuccessfully' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await userModels.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ message: 'user not found' })
    }
  } catch (error) {
    res.status(500).json({ message: 'user deleted unsuccessfully' })
  }
}

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token')
    res.status(200).json({ message: 'User Logout successfully' })
  } catch (error) {
    res.status(500).json(error, { message: 'User Logout unsuccessfully' })
  }
}
