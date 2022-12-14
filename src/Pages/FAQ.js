import "./FAQ.css";
import React from "react";
import { Box } from "@mui/system";
import HBNavbar from "./Components/Navbar/HBNavbar";

export const FAQ = () => {
  return (
    <div>
      <HBNavbar />
      <Box
        sx={{
          p: 2,
          bgcolor: "lightgray",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%",
        }}
      >
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery only make cupcakes?
        </h2>
        <p className="FAQText">
          No, we also have glazed donuts and just like our cupcakes, we make
          them from scratch daily! We also serve a variety of Honey Bear’
          coffees blends, espressos, and lattes, as well as 15 flavors of hot
          Tazo teas and our amazing Honey Sweet Iced Tea.
        </p>
        <h2 className="FAQTitle">Do you have same-day pick-up ordering?</h2>
        <p className="FAQText">
          Same day pick up ordering is available only for our daily cupcake
          flavors and flavors of the day and can be found on our online MENU.
          All other flavors require a 48 hour notice also through our online
          ordering.
        </p>
        <h2 className="FAQTitle">
          How do I know what flavor cupcakes are available?
        </h2>
        <p className="FAQText">
          We regularly add new flavors and have seasonal flavors as well. Please
          refer to the MENU on our website for our daily flavors as well as our
          seasonal and other flavors that are rotated.
        </p>
        <h2 className="FAQTitle">
          If I have a nut-allergy, should I eat at Honey Bear’s Cupcakery?
        </h2>
        <p className="FAQText">
          Though we are a peanut free facility and only use a small volume of
          walnuts and almonds, we recommend if you have a nut allergy, it is
          best to refrain from eating our cupcakes and donuts.
        </p>
        <h2 className="FAQTitle">
          Do you offer any gluten free, vegan, or sugar-free cupcakes?
        </h2>
        <p className="FAQText">
          Yes. We have a daily variety of gluten free cupcakes. We also offer
          vegan and very low sugar cupcakes available through our online
          ordering. Please note, because we bake with dairy and wheat flour on
          premises daily, we recommend if you have a gluten allergy or a dairy
          allergy, it is best to refrain from eating our cupcakes and donuts.
        </p>
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery offer custom decorating for cupcakes?
        </h2>
        <p className="FAQText">
          We have a variety of custom fondant and buttercream decorations to
          choose from for birthdays, weddings, showers, seasonal, holidays and
          more. We do require a minimum order of one dozen cupcakes for custom
          fondant or buttercream decorating and a 48 hour notice through our
          online ordering. Check out our photo gallery to see how Honey Bear’s
          Cupcakery can make your special day or event memorable and delicious!
        </p>
        <h2 className="FAQTitle">What kind of frosting do you use?</h2>
        <p className="FAQText">
          We use made from scratch buttercream frosting for most of our
          cupcakes. We have a few cupcakes that use our made from scratch cream
          cheese frosting that is less sweet, such as our red velvet and carrot
          cake.
        </p>
        <h2 className="FAQTitle">
          How do I store the cupcakes after I pick them up?
        </h2>
        <p className="FAQText">
          Cupcakes can be stored at room temperature and enjoyed on the date of
          pick-up. If you will be having the cupcakes more than 24 hours after
          pick-up, it is recommended to freeze them in an airtight container for
          up to 10 days after they are purchased. To thaw, leave them at room
          temperature for 2 hours before serving.
        </p>
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery offer favor boxes and cupcake stands?
        </h2>
        <p className="FAQText">
          We do offer single cupcake favor boxes donned with our Honey Bear’s
          Cupcakery sticker; each box is $1.00. We also offer a cupcake stand
          that holds up to 24 cupcakes for an additional $10.00.
        </p>
        <h2 className="FAQTitle">What kind of donuts do you serve?</h2>
        <p className="FAQText">
          We make our yeast donut dough from scratch, fry them fresh daily and
          cover them with glaze.
        </p>
        <h2 className="FAQTitle">Are Honey Bear’s donuts available all day?</h2>
        <p className="FAQText">
          Though we make many fresh donuts daily, they are first come first
          serve while supplies last.
        </p>
        <h2 className="FAQTitle">
          Does Honey Bear’s make mini cupcakes or alcohol infused cupcakes.
        </h2>
        <p className="FAQText">
          We do not offer mini cupcakes or alcohol infused cupcakes.
        </p>
      </Box>
    </div>
  );
};
