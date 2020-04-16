/*
    Friend List
    Creates a list of friends given the current user object

    Authors: Heidi Sprouse
*/

import { Friend } from "./Friend.js";
import { getFriendObjects } from "./getCurrentFriends.js";

const currentUserId = document.querySelector("#currentUserId").value

export const ShowFriendList = () => {
    const friendObjects = getFriendObjects(currentUserId)

    return friendObjects.map(friendObject => {
        return Friend(friendObject)
    }).join('')

}