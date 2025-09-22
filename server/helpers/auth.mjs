export const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.status(401).json({ error: 'ログインが必要です。' });
  }
  next();
};
