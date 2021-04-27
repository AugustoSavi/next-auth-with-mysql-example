import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

export default async function handler(req, res) {
  const { title, content } = req.body
  try {
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: '`title` and `content` are both required' })
    }

    const results = query(
      `
      INSERT INTO entries (title, content)
      VALUES (?, ?)
      `,
      [filter.clean(title), filter.clean(content)]
    )
4
    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
