export const data = [
    {
      title: 'Title 1',
      text: 'Text 1',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 2',
      text: 'Text 2',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 3',
      text: 'Text 3',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 4',
      text: 'Text 4',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 5',
      text: 'Text 5',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 6',
      text: 'Text 6',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 7',
      text: 'Text 7',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 8',
      text: 'Text 8',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 9',
      text: 'Text 9',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 10',
      text: 'Text 10',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 11',
      text: 'Text 11',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 12',
      text: 'Text 12',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 13',
      text: 'Text 13',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 14',
      text: 'Text 14',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 15',
      text: 'Text 15',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 16',
      text: 'Text 16',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'Title 17',
      text: 'Text 17',
      tags: ['tag1', 'tag2']
    },
  ]
export default async function handler(req, res) {
    const { query } = req.query;
    const results = data.filter(({ title, text }) => title.toLowerCase().includes(query.toLowerCase()) || text.toLowerCase().includes(query.toLowerCase()));
    res.status(200).json(results);
}