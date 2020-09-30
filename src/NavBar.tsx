import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Wrapper = Styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #FF9900;
  color: #FFF;
`;

const Title = Styled("div")`
  flex: 1;
  margin-left: 20px;
  font-size: 23px;
  font-weight: bold;
`;

const LinkBox = Styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  text-align: center;
  background: #FF8800;
  cursor: pointer;
  &:hover {
    background: #FFAA00;
  }
  a {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #FFF;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Title>サイトタイトル</Title>
      <Router>
        <LinkBox>
          <Link to="/home">ホーム</Link>
        </LinkBox>
        <LinkBox>
          <Link to="/details">詳細</Link>
        </LinkBox>
      </Router>
    </Wrapper>
  );
};

export default NavBar;
