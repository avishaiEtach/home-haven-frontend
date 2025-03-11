import React from "react";
import "./AboutUsTeam.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { team_members } from "../../assets/constants";

export const AboutUsTeam = () => {
  return (
    <div className="container">
      <h2 className="about-us-team-cards-header bold">Our Team</h2>
      <div data-aos="fade-up" data-aos-duration="2000">
        <div className="about-us-team-cards-container">
          {team_members.map((team_member, index) => (
            <div key={index} className="team-card-container">
              <div
                className="team-card-image"
                style={
                  team_member.image
                    ? { backgroundImage: `url(${team_member.image})` }
                    : {}
                }
              ></div>
              <div className="team-card-details">
                <p className="semi-bold team-card-job-title">
                  {team_member.jobTitle}
                </p>
                <p className="bold team-card-name">{team_member.name}</p>
                <div className="team-card-icons-container">
                  <FaFacebookF />
                  <FaXTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
