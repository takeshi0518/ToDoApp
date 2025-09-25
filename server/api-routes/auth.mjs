import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.mjs';

const router = express.Router();

router.get('/me', async (req, res) => {
  if (!req.session.user_id) {
    return res.json({ user: null });
  }
  try {
    const user = await User.findById(req.session.user_id);
    if (!user) {
      return res.json({ user: null });
    }

    res.json({
      user: {
        username: user.username,
        id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラー' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);

    const user = new User({
      username,
      password: hash,
    });
    await user.save();
    req.session.user_id = user._id;

    res.status(201).json({ username: user.username });
  } catch (error) {
    res.status(400).json({ error: 'ユーザー登録に失敗しました。' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'ログインに失敗しました。' });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      req.session.user_id = user._id;
      res.json({ username: user.username });
    } else {
      res.status(401).json({ error: 'ログインに失敗しました。' });
    }
  } catch (error) {
    res.status(500).json({ error: 'サーバーエラー' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'ログアウトに失敗しました。' });
    }
    res.json({ message: 'ログアウトしました。' });
  });
});

export default router;
