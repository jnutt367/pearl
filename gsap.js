gsap.fromTo(".first", { x: 1, opacity: "0" }, { duration: 6, rotate: 360, scale: 2, borderRadius: "50%", y: -10, border: "2px inset pink", opacity: "1" });
gsap.fromTo(".stars", { x: 1, opacity: "0" }, { duration: 6, rotate: 360, scale: 2, borderRadius: "50%", y: -10, opacity: "1" });
gsap.to(".second", { duration: 2, y: 200 });

gsap.fromTo(".coco", { color: "blue" }, { duration: 8, y: 200, color: "pink", textShadow: "5px 5px purple", fontSize: "60px", fontWeight: "900", fontFamily: "fantasy" })