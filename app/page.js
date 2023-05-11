"use client";
import classes from "./page.module.css";
import { IoIosArrowBack, IoIosSend } from "react-icons/io";
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";

const Home = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.9
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");


  return (
    <>
      <div className={classes.header}>
        <div className={classes["sm-btn"]}>
          <IoIosArrowBack />
        </div>
        <h5>About</h5>
        <div className={classes["sm-btn"]}>
          <IoIosSend />
        </div>
      </div>
      <div className={classes.sectionFirst}>
        <div className={classes.pic}>
          <img
            src="https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png"
            alt=""
          />
        </div>
        <h3>Alara Frank</h3>
        <p>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </p>
      </div>
      <div ref={sectionRef} className={classes.sectionSecond}>
        <div className={classes.inner}>
          <h3 className="fadeIn">The talk of what makes a champion.</h3>
          <p className="fadeIn">
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
          <div className={`fadeIn ${classes["btn-row"]}`}>
            <a href="/">Click here bruh</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
