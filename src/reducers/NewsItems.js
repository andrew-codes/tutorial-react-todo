const initialState = {};
const MOST_RECENT = "MOST_RECENT";

export default function NewsItems(state = initialState, action) {
  switch (action.type) {
    case MOST_RECENT:
      return {
          newsItems: [
            {
              id: 1,
              title: "Dispatched News Item",
              body: "Some sample text...",
            }
          ],
        };
    default:
      return state;
  }
}
