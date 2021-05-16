import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { storyStartLoading } from "../../../actions/events";
import { NotFiles } from "../../../helpers/NotFiles";
import { DeleteButtonFab } from "../../UI/DeleteButtonFab";
import { StoryItem } from "./StoryItem";

export const StoryScreen = () => {
  const history = useHistory();
  const { stories, activeStory } = useSelector((state) => state.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storyStartLoading());
  }, [dispatch]);

  const handleNewStory = () => {
    history.push("/profile/new-story");
  };
  return (
    <>
      <button className="btn btn-info mb-3" onClick={handleNewStory}>
        <i className="fas fa-plus"></i> &nbsp; Nueva historia
      </button>
      <hr />

      {stories ? (
        <div className="card-columns">
          {stories.map(({ id, title, body }) => (
            <StoryItem title={title} body={body} id={id} key={id} />
          ))}
        </div>
      ) : (
        <NotFiles />
      )}

      {activeStory && <DeleteButtonFab />}
    </>
  );
};
