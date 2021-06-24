let videos = [
  {
    title: "Video 1",
    rating: 5,
    comments: 2,
    createdAt: "2 mins ago",
    views: 10,
    id: 1,
  },
  {
    title: "Video 2",
    rating: 5,
    comments: 2,
    createdAt: "2 mins ago",
    views: 20,
    id: 2,
  },
  {
    title: "Video 3",
    rating: 5,
    comments: 2,
    createdAt: "2 mins ago",
    views: 20,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos }); // render home.pug
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
