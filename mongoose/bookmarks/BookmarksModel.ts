import * as mongoose from "mongoose";
import bookmarksSchema from "../bookmarks/BookmarksSchema";

/**
 * Bookmarks mongoose model.
 */
const bookmarksModel = mongoose.model("BookmarksModel", bookmarksSchema);

export default bookmarksModel;
