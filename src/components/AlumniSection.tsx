import { motion, useInView } from "framer-motion";
import { useRef } from "react";


import mownithImg from "@/assets/alumni/mownith.png";
import akashImg from "@/assets/alumni/akash.png";
import sudhirImg from "@/assets/alumni/sudhir.png";
import shamanthImg from "@/assets/alumni/shamanth.png";
import sanjayImg from "@/assets/alumni/sanjay.png";
import dimpalImg from "@/assets/alumni/dimpal.png";
import mahathiImg from "@/assets/alumni/mahathi.png";
import prajwalImg from "@/assets/alumni/prajwal.png";
import kushiImg from "@/assets/alumni/kushi.png";
import chayankImg from "@/assets/alumni/chayank.png";
import SapthamiImg from "@/assets/alumni/Sapthami.png";
import TaaraImg from "@/assets/alumni/Taara.png";
import DhanushImg from "@/assets/alumni/Dhanush.png";
import PalImg from "@/assets/alumni/Pal.png";
import AfnaanImg from "@/assets/alumni/Afnaan.png";
import AnirudhImg from "@/assets/alumni/Anirudh.png";
import MoulyaImg from "@/assets/alumni/Moulya.png";
import TrishalImg from "@/assets/alumni/Trishal.png";
import TilakImg from "@/assets/alumni/Tilak.png";
import SakethImg from "@/assets/alumni/Saketh.png";
import madanImg from "@/assets/alumni/madan.png";
import tejassuImg from "@/assets/alumni/tejassu.png";
import dhyanImg from "@/assets/alumni/dhyan.png";
import vandithImg from "@/assets/alumni/vandita.png";
import manvantharImg from "@/assets/alumni/manvanthar.png";
import sampadhaImg from "@/assets/alumni/sampada.png";
import pavanImg from "@/assets/alumni/pavan.png";
import soujanyaImg from "@/assets/alumni/soujanya.png";
import navjotImg from "@/assets/alumni/navjot.png";
import sumedhImg from "@/assets/alumni/sumedh.png";
import praptiImg from "@/assets/alumni/prapthi.png";
import sannidhiImg from "@/assets/alumni/sannidhi.png";
import rehanImg from "@/assets/alumni/rehan.png";
import kusumaImg from "@/assets/alumni/kusuma.png";
import MahadeshImg from "@/assets/alumni/Mahadesh.png";
import ImpanaImg from "@/assets/alumni/Impana.png";
import ManojImg from "@/assets/alumni/Manoj.png";
import SinchanaImg from "@/assets/alumni/Sinchana.png";
import AbhishekImg from "@/assets/alumni/Abhishek.png";
import UllasImg from "@/assets/alumni/Ullas.png";
import JanapriyaImg from "@/assets/alumni/Janapriya.png";
import AnkithaImg from "@/assets/alumni/Ankitha.png";
import TrupthiImg from "@/assets/alumni/Trupthi.png";

const photoMap: Record<string, string> = {
   "Mahadesh L M":MahadeshImg,
   "Impana D":ImpanaImg,
   "Manoj S":ManojImg,
   "Sinchana M L":SinchanaImg,
  "Abhishek M L":AbhishekImg,
  "Ullas G":UllasImg,
  "Janapriya":JanapriyaImg,
  "Ankitha Shetty":AnkithaImg,
  "Trupthi":TrupthiImg,
  "Mownith H S": mownithImg,
  "Akash G S": akashImg,
  "Sudhir G": sudhirImg,
  "Shamanth R S": shamanthImg,
  "Sanjay H L": sanjayImg,
  "L Dimpal": dimpalImg,
  "Mahathi Bhat A N": mahathiImg,
  "Prajwal U": prajwalImg,
  "Kushi G A": kushiImg,
  "Chayank U": chayankImg,
  "Sapthami V": SapthamiImg,
  "Tara B R": TaaraImg,
  "Dhanush B S": DhanushImg,
  "Ankitha Pal S D": PalImg,
  "Muhammed Afnaan Ur Rahmaan": AfnaanImg,
  "Aniruddha S Kulkarni": AnirudhImg,
  "Moulya Maadesh": MoulyaImg,
  "Tilak Prasad": TilakImg,
  "Trishal Ravish": TrishalImg,
  "T S Saketh Puranik": SakethImg,
  "Madan Bharadhwaj": madanImg,
  "G S Tejassu": tejassuImg,
  "Dhyan Agni": dhyanImg,
  "Vanditha": vandithImg,
  "Manvantar Girimaji": manvantharImg,
  "Sampadha": sampadhaImg,
  "Pavan": pavanImg,
  "Soujanya": soujanyaImg,
  "Navjot Singh Bhatia": navjotImg,
  "Sumedh Srinivasan": sumedhImg,
  "Prapthi S Jain": praptiImg,
  "Sannidhi D Jain": sannidhiImg,
  "Sheik Rehan": rehanImg,
  "Kusuma B": kusumaImg,
};

const alumniData = [
  {
    batch: "Batch - 2026",
    members: [ "Mahadesh L M",
   "Impana D",
   "Manoj S",
   "Sinchana M L",
  "Abhishek M L",
  "Ullas G",
  "Janapriya",
  "Ankitha Shetty",
  "Trupthi",
  "Dhanyashree P",
  "Prakyath Bidappa C K", "Mohammed Haris"
      
    ],
  },
  {
    batch: "Batch - 2025",
    members: [
      "Tara B R", "Dhanush B S", "Ankitha Pal S D", "Muhammed Afnaan Ur Rahmaan",
      "Aniruddha S Kulkarni", "Moulya Maadesh", "Tilak Prasad", "Trishal Ravish",
      "T S Saketh Puranik", 
    ],
  },
  {
    batch: "Batch - 2024",
    members: [
      "Mownith H S", "Akash G S", "Sudhir G", "Shamanth R S",
      "Sanjay H L", "L Dimpal", "Mahathi Bhat A N", "Prajwal U",
      "Kushi G A", "Chayank U", "Sapthami V",
    ],
  },
  {
    batch: "Batch - 2023",
    members: [
      "Madan Bharadhwaj", "G S Tejassu", "Dhyan Agni", "Vanditha",
      "Manvantar Girimaji", "Sampadha", "Pavan", "Soujanya",
    ],
  },
  {
    batch: "Batch - 2022",
    members: [
      "Navjot Singh Bhatia", "Sumedh Srinivasan", "Prapthi S Jain", "Sannidhi D Jain",
      "Sheik Rehan", "Kusuma B",
    ],
  },
  {
    batch: "Batch - 2017",
    members: [
      "Manavi S M", "Shesha Vishnu Prasad", "Siddlingeshwar MV", "Vishwanath",
      "Sushmitha", "Varun", "Umesh", "Anil G R",
      "Usha", "Shwetha C", "Suraj", "Viresh Badigar",
      "Preethi S", "Sushma Javagal",
    ],
  },
  {
    batch: "Batch - 2016",
    members: [
      "Rajath B R", "Ramprasad", "Apeksha Kothari", "Karthik Devaru",
      "Sandeep D K", "Shreyans Jain", "Vinay Sipani", "Eranna",
      "Anusha", "Sachin B T",
    ],
  },
  {
    batch: "Batch - 2015",
    members: [
      "Yogesh T M", "Pratika U", "Renu B K", "Nayab Hussain",
      "Geethanjali T", "Preethi T S", "Pavan Kumar Chavan", "Kokila H J",
      "Madivala Nagaraja", "Manjunath R", "Jayachandra S H",
    ],
  },
];

const AlumniSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">Our Legacy</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Alumni <span className="text-primary glow-text">Wing</span>
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {alumniData.map((batch, bi) => (
            <motion.div
              key={batch.batch}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: bi * 0.1 }}
            >
              <div className="text-center mb-6">
                <span className="inline-block bg-primary/20 text-primary font-heading text-sm font-semibold tracking-wider px-6 py-2 rounded-full">
                  {batch.batch}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {batch.members.map((name) => (
                  <div
                    key={name}
                    className="card-space p-4 rounded-xl border border-border text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                      {photoMap[name] ? (
                        <img src={photoMap[name]} alt={name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-primary font-heading text-lg font-bold">
                          {name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-foreground">{name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;
