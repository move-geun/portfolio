import React, { useState } from "react";
import { ContactContainer, ChatBox, FlexCol } from "./Contact.style";
import { useRecoilState } from "recoil";
import { NowPage } from "../recoil/atoms";

const Contact = () => {
  const title = "<Contact me />";
  const [nowPage, setNowPage] = useRecoilState(NowPage);
  const [tmpSearch, setTmpSearch] = useState("");
  const [noindex, setNoindex] = useState(false);
  const search = (e) => {
    e.preventDefault();
    let index = e.target.value.toLowerCase();
    setTmpSearch(index);
  };

  const goSearch = (e) => {
    if (e.keyCode === 13) {
      if (tmpSearch === "intro") {
        setNowPage("intro");
      } else if (tmpSearch === "aboutme") {
        setNowPage("aboutme");
      } else if (tmpSearch === "onsikgo") {
        setNowPage("onsikgo");
      } else if (tmpSearch === "mlbti") {
        setNowPage("mlbti");
      } else if (tmpSearch === "dstation") {
        setNowPage("dstation");
      } else if (tmpSearch === "contact") {
        setNowPage("contact");
      } else {
        setNoindex(true);
      }
    }
  };

  return (
    <ContactContainer>
      <h3 className="title">{title}</h3>
      <FlexCol>
        <div className="item">
          <div className="imgcase">
            <div className="imgbox">
              <img src="./assets/skills/email.png" alt="" />
            </div>
            <div className="imgtitle">Mail</div>
          </div>
          <div className="content">ehdrms1426@gmail.com</div>
        </div>
        <div className="item">
          <div className="imgcase">
            <div className="imgbox">
              <img src="./assets/skills/call.png" alt="" />
            </div>
            <div className="imgtitle">Call</div>
          </div>
          <div className="content">010-6419-0743</div>
        </div>
        <div className="item">
          <div className="imgcase">
            <div className="imgbox">
              <img src="./assets/skills/github.png" alt="" />
            </div>
            <div className="imgtitle">Github</div>
          </div>
          <a href="https://github.com/move-geun" className="content">
            https://github.com/move-geun
          </a>
        </div>
      </FlexCol>

      <ChatBox>
        <div className="hbox">
          <h5 className="firsth">DonggeunLee : </h5>
          <h5 className="sech"> ~/portfolio/contact/</h5>
        </div>
        <label htmlFor="navi">
          <input
            type="text"
            id="navi"
            placeholder="intro"
            onChange={(e) => search(e)}
            onKeyUp={(e) => goSearch(e)}
          />
        </label>
        {noindex ? (
          <div className="error">
            <h4>Please search with the keyword below</h4>
            <h5>intro, aboutme, onsikgo, mlbti, dstation, contact</h5>
          </div>
        ) : null}
      </ChatBox>
    </ContactContainer>
  );
};
export default Contact;
