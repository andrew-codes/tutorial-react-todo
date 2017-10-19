export default function NewsItems(state = {}, action) {
  return {
    newsItems: [
      {
        id: 1,
        title: "Dispatched News Item",
        body: "Some sample text...",
      }
    ],
  }
}
