export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Instagram Reel",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/emily.png",
    username: "emily",
    views: 25,
    visibility: "private",
    duration: 92,
  },
  {
    id: "3",
    title: "TikTok Dance",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-05-03"),
    userImg: "/assets/images/david.png",
    username: "david",
    views: 340,
    visibility: "public",
    duration: 180,
  },
  {
    id: "4",
    title: "YouTube Vlog",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-05-04"),
    userImg: "/assets/images/sarah.png",
    username: "sarah",
    views: 87,
    visibility: "unlisted",
    duration: 240,
  },
  {
    id: "5",
    title: "Daily Update",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/mike.png",
    username: "mike",
    views: 64,
    visibility: "public",
    duration: 105,
  },
  {
    id: "6",
    title: "Behind the Scenes",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-05-06"),
    userImg: "/assets/images/laura.png",
    username: "laura",
    views: 129,
    visibility: "private",
    duration: 200,
  },
  {
    id: "7",
    title: "Tutorial Video",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-05-07"),
    userImg: "/assets/images/chris.png",
    username: "chris",
    views: 305,
    visibility: "public",
    duration: 300,
  },
];
