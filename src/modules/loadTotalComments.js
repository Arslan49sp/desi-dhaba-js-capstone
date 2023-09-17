import getComments from './getcomments.js';

export const loadtotalcomments = async (id) => {
  const comment = await getComments(id);

  const commentCounter = document.querySelector(`#comments-${id}`);
  if (comment.length > 0) {
    commentCounter.innerHTML = `${comment.length} comments,`;
  }
};

export const loadTotalComments = (ids) => {
  ids.forEach(async (id) => {
    await loadtotalcomments(id);
  });
};
