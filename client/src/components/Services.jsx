import * as React from "react";
import { Container, Typography, Grid } from "@mui/material/";
import ServiceCard from "./ServiceCard";

import generalhealth from "../../public/assets/images/generalhealth.jpg";
import earspecialist from "../../public/assets/images/earspecialist.jpg";
import eyespecialist from "../../public/assets/images/eyespecialist.jpg";
import eyetest from "../../public/assets/images/eyetest.jpg";
import heartest from "../../public/assets/images/heartest.jpg";
import scans from "../../public/assets/images/scans.jpg";
import specialistref from "../../public/assets/images/specialistref.jpg";
import teethclean from "../../public/assets/images/teethclean.jpg";
import teethspecialist from "../../public/assets/images/teethspecialist.jpg";

const services = [
  {
    title: "General Health Check",
    info: "The routine body maintenance",
    image: generalhealth,
    alt: "stethoscope",
  },
  {
    title: "Ear Specialist",
    info: "You want someone to hear you out",
    image: earspecialist,
    alt: "doctor checking ear",
  },
  {
    title: "Eye Specialist",
    info: "The doctor you want to keep your eye on",
    image: eyespecialist,
    alt: "eye examination equipment",
  },
  {
    title: "Eye Test",
    info: "It is time to see if you are due for glasses",
    image: eyetest,
    alt: "eye test",
  },
  {
    title: "Hearing Test",
    info: "It was not the wax stopping the hearing",
    image: heartest,
    alt: "hearing test",
  },
  {
    title: "Scans",
    info: "X-Rays, MRIs",
    image: scans,
    alt: "examining mri scan",
  },
  {
    title: "Specialist Referral",
    info: "The issues are not just skin deep",
    image: specialistref,
    alt: "doctor appointment",
  },
  {
    title: "Teeth Clean",
    info: "You forgot to floss",
    image: teethclean,
    alt: "teeth clean",
  },
  {
    title: "Teeth Specialist",
    info: "You want someone to hear you out",
    image: teethspecialist,
    alt: "checking teeth",
  },
];

export default function Services() {
  return (
    <>
      <Typography variant="h1">Services</Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {services.map((service) => {
          return (
            <ServiceCard
              title={service.title}
              info={service.info}
              image={service.image}
            />
          );
        })}
      </Grid>
    </>
  );
}
