import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section>
        <p className="m-8 text-center text-2xl">About Us:</p>
        <p className="m-8 text-xl p-4">
          At "Tasty Parathas", we are passionate about bringing culinary
          delights to your doorstep. With a commitment to flavor, quality, and
          convenience, we have curated a diverse menu that caters to every
          palate. Our journey began with a simple mission to redefine the way
          you experience food, making every meal an unforgettable adventure.
          What Sets Us Apart:
          <br />
          1. Culinary Excellence: Our chefs are artists in the kitchen,
          dedicated to crafting dishes that tantalize your taste buds. From
          traditional favorites to innovative creations, our menu is a
          celebration of global flavors.
          <br /> 2. Fresh and Locally Sourced Ingredients: We believe in the
          power of fresh, high-quality ingredients. That's why we source locally
          whenever possible, ensuring that every bite is a burst of freshness.
          <br />
          3. Effortless Ordering: Ordering your favorite meals has never been
          easier. Our user-friendly website and mobile app make the process
          seamless, allowing you to browse, select, and customize your order
          with just a few clicks.
          <br /> 4. Fast and Reliable Delivery: Your satisfaction is our
          priority. Our efficient delivery team works tirelessly to ensure your
          order reaches you hot and fresh, right on time. Special Diets and
          Preferences: We understand that everyone has unique dietary
          preferences. That's why our menu includes a variety of options,
          including vegetarian, vegan, and gluten-free choices, ensuring there's
          something for everyone. <br />
          5. Community Connection: We are more than just a food delivery
          service; we are a part of your community. Our commitment extends
          beyond your plate, with initiatives that support local businesses and
          promote sustainable practices. <br />
          Join us on this culinary journey, and let us bring the restaurant
          experience to the comfort of your home. Explore, savor, and enjoy the
          extraordinary flavors that await you at "Tasty Parathas" where every
          meal is a celebration!
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
