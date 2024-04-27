interface IPost {
  id: number;
  createdAt: string;
  author: IUser;
  authorId: number;
  theme: ITheme;
  themeId: number;
  tags: ITag[];
  _count: {
    likes: number;
  };
  comments: IComment[];
}

interface IAuthor {
  id: number;
  name: string;
  avatar: string;
  about: string;
  registeredAt: string;
  role: string;
  status: string;
}

// {
//   "provider": "steam",
//   "_json": {
//     "steamid": "76561199029525580",
//     "communityvisibilitystate": 3,
//     "profilestate": 1,
//     "personaname": "uncrowned king",
//     "profileurl": "https://steamcommunity.com/profiles/76561199029525580/",
//     "avatar": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a.jpg",
//     "avatarmedium": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a_medium.jpg",
//     "avatarfull": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a_full.jpg",
//     "avatarhash": "5f64005e432f770c4a96e11174e886997414ad4a",
//     "lastlogoff": 1710156298,
//     "personastate": 0,
//     "primaryclanid": "103582791429521408",
//     "timecreated": 1582923622,
//     "personastateflags": 0
//   },
//   "id": "76561199029525580",
//   "displayName": "uncrowned king",
//   "photos": [
//     {
//       "value": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a.jpg"
//     },
//     {
//       "value": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a_medium.jpg"
//     },
//     {
//       "value": "https://avatars.steamstatic.com/5f64005e432f770c4a96e11174e886997414ad4a_full.jpg"
//     }
//   ],
//   "iat": 1714144620,
//   "header": {
//     "alg": "HS256",
//     "typ": "JWT"
//   }
// }
interface IPhotos {
  value : string
}

interface IUser {
  id: string;
  displayName: string;
  photos: IPhotos[];
  about?: string;
}

interface ITheme {
  id: number;
  name: string;
  createdAt: string;
}

interface ITag {
  id: number;
  name: number;
  createdAt: number;
  posts: IPost[];
  users: IUser[];
}

interface IComment {
  id: string;
  createdAt: string;
  content: string;
  postId: string;
  authorId: number;
  parentCommentId: null;
  childComments?: [];
}

export type { IPost, IUser };
