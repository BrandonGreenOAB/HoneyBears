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
          bgcolor: "#ffedb3",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "80%",
          borderRadius: "10px",
        }}
      >
        <h2 className="FAQTitle">What are your ordering rules?</h2>
        <p>
          Honey Bear’s Cupcakery bakes our cupcakes from scratch daily! In order
          to maintain our high standards and amazing cupcakes, we have to have
          these following rules. Thank you!!!
        </p>
        <p>
          Please place orders at Honey Bear’s Cupcakery or by calling our order
          line @ 828-707-9946 and leaving a message. Messages are checked daily,
          and you will be called back by the end of the day. You can also email
          us at Honeybearscupcakery.com!
        </p>
        <p>
          Orders must be placed 48 hours in advance. Order can be picked up
          after 12:00pm on your pickup date (unless otherwise discussed).
        </p>
        <p>
          Orders may only be from cupcakes that are “available now” or “monthly
          special” cupcakes (these can be found on our cupcake menu on our
          website). Cupcakes come as is on the menu, we do not offer other
          decorations.
        </p>
        <p>
          The menu changes on the 1 st of every month. If you are ordering for
          the following month, specialty flavors for the next month will be
          noted on the menu as “next month’s special”. Cupcake flavors from the
          previous month will not be available.
        </p>
        We have a maximum of 48 cupcakes for orders. We do not do large events.
        <p></p>
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery offer custom decorating for cupcakes?
        </h2>
        <p className="FAQText">
          No, we do not offer custom decorations but each of our flavors comes
          with their own special design and topping!
        </p>
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery only make cupcakes?
        </h2>
        <p className="FAQText">
          No, we also have Glazed donuts, Boston cream donuts, Giant apple
          fritters, &amp; Maple bacon donuts, and just like our cupcakes, we
          make them from scratch daily! We also serve a variety of Honey Bear’
          coffees blends, espressos, and lattes, as well as 15 flavors of hot
          Tazo teas, our famous Honey Sweet Iced Tea and seasonal favorites!
        </p>
        <h2 className="FAQTitle">Do you have same-day pick-up ordering?</h2>
        <p className="FAQText">
          No, but you can find our “available now” and “monthly special”
          cupcakes on our online MENU. We bake our cupcakes daily, so it is a
          first come first serve basis while supplies last. Come on down and
          grab some!
        </p>
        <h2 className="FAQTitle">
          How do I know what flavor cupcakes are available?
        </h2>
        <p className="FAQText">
          Please refer to the MENU on our website for our “available now”
          flavors as well “monthly special” cupcakes. Cupcakes on the menu are
          rotated monthly as well as seasonal flavors.
        </p>{" "}
        <h2 className="FAQTitle">
          If I have a nut-allergy, should I eat at Honey Bear’s Cupcakery?
        </h2>
        <p className="FAQText">
          Though we are a peanut free facility and only use a small volume of
          almonds. We recommend if you have a nut allergy, it is best to refrain
          from eating our cupcakes and donuts. Our almond flavored cupcakes and
          buttercream use pure almond extract.
        </p>
        <h2 className="FAQTitle">
          Do you offer any gluten free, vegan, or sugar-free cupcakes?
        </h2>
        <p className="FAQText">
          Yes. We have a select variety of gluten free and vegan cupcakes
          available daily. See our menu for flavors available. Please note,
          because we bake with dairy and wheat flour on premises daily, we
          recommend if you have a gluten allergy or a dairy allergy, it is best
          to refrain from eating our cupcakes and donuts.
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
        <h2 className="FAQTitle">
          How do I store the cupcakes after I pick them up?
        </h2>
        <p className="FAQText">
          Honey Bear’s Cupcakery serves ‘always fresh, always from scratch,
          baked daily in house’ cupcakes & fried yeast donuts, made with high
          quality ingredients, real fruits, Ghirardelli Chocolates, handmade
          buttercream and cream cheese frostings.
          <br />
          <br />
          Honey Bear’s cupcakes are the freshest if eaten within 24 hours and do
          not need to be refrigerated.
          <br />
          <br />
          If you are planning on having them later than 24 hours, there are ways
          to keep our cupcakes fresh!
          <br />
          <br />
          Preferred method: Freeze… Store in an airtight container and put in
          the freezer within 24 hours. Freeze for up to 2 months. Thaw just one,
          or all, at room temp for 2 hours.
          <br />
          <br />
          Fridge method…Keep them in an airtight container in the fridge for up
          to 3 days. Thaw at room temp for 15 minutes.
          <br />
          <br />
          ENJOY!
        </p>
        <h2 className="FAQTitle">
          Does Honey Bear’s Cupcakery offer favor boxes?
        </h2>
        <p className="FAQText">
          We send your cupcakes with you in a box that ensures their safety
          getting home! Extra boxes for deal orders are $1.00 each.
          <br />
          <br />
          We do offer single cupcake favor boxes donned with our Honey Bear’s
          Cupcakery sticker; each box is $1.00.
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
