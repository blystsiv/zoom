import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import JoinRoomContent from "./JoinRoomContent";
import JoinRoomTitle from "./JoinRoomTitle";

import { setIsRoomHost } from "../../store/actions";
import "./JoinRoomPage.css";

const JoinRoomPage = (props) => {
  const { setIsRoomHostAction, isRoomHost } = props;

  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      setIsRoomHostAction(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent />
      </div>
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(mapStoreStateToProps, mapActionsToProps)(JoinRoomPage);
