import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import tarunImg from "@/assets/alumni/tarun.jpg";
import prathamImg from "@/assets/alumni/pratham.jpg";
import omairImg from "@/assets/alumni/omair.jpg";
import monishImg from "@/assets/alumni/monish.jpg";
import krupaImg from "@/assets/alumni/krupa.jpg";
import amruthaHNImg from "@/assets/alumni/amrutha.jpg";
import anaghaImg from "@/assets/alumni/anagha.jpg";
import thanyaImg from "@/assets/alumni/thanya.jpg";
import nireekshaImg from "@/assets/alumni/nireeksha.jpg";
import incharaImg from "@/assets/alumni/inchara.jpg";
import akankshaImg from "@/assets/alumni/akanksha.jpg";
import prarthanaImg from "@/assets/alumni/prarthana.jpg";
import srirakshaImg from "@/assets/alumni/sriraksha.jpg";
import MahadeshImg from "@/assets/alumni/Mahadesh.png";
import ImpanaImg from "@/assets/alumni/Impana.png";
import ManojImg from "@/assets/alumni/Manoj.png";
import SinchanaImg from "@/assets/alumni/Sinchana.png";
import AbhishekImg from "@/assets/alumni/Abhishek.png";
import UllasImg from "@/assets/alumni/Ullas.png";
import JanapriyaImg from "@/assets/alumni/Janapriya.png";
import AnkithaImg from "@/assets/alumni/Ankitha.png";
import TrupthiImg from "@/assets/alumni/Trupthi.png";
import bhuvanImg from "@/assets/alumni/bhuvan.jpg";
import kushalImg from "@/assets/alumni/kushal.jpg";
import amruthImg from "@/assets/alumni/amruth.jpg";
import phianImg from "@/assets/alumni/phian.jpg";
import rahulImg from "@/assets/alumni/rahul.jpg";
import amrutha2Img from "@/assets/alumni/amrutha2.jpg";
import chaithanyaImg from "@/assets/alumni/chaithanya.jpg";
import ApoorvaImg from "@/assets/alumni/apoorva.jpeg"


interface TeamMember {
  name: string;
  role?: string;
  initials: string;
  year: string;
}

/* ✅ TEAM DATA */
const team: TeamMember[] = [
  

  { name: "Poorab", role: "President", initials: "P", year: "4th Year" },
  { name: "Bhuvan", role: "General Secretary , Treasurer", initials: "B", year: "4th Year" },
  { name: "Ullas Gowda J S", role: "Vice president", initials: "UG", year: "4th Year" },
  { name: "Sinchana Prakash", role: "Creative and Promotinal Head", initials: "SP", year: "4th Year" },
  { name: "Sharanya S", role: "Event Director", initials: "SS", year: "4th Year" },
  { name: "Niranjan K", role: "Event Co-ordinator", initials: "NK", year: "4th Year" },
  { name: "Yashwanth", role: "Inventory manager", initials: "Y", year: "4th Year"},

  { name: "Kushal Gowda SP",role:"Technical head" ,initials: "KG", year: "3rd Year" },
  { name: "Amruth R L", role:"Associate event Ddirector",initials: "AR", year: "3rd Year" },
  { name: "Ghanavi M S",role:"Co-Treasurer", initials: "GM", year: "3rd Year" },
  { name: "Rahul Kothwal", role:"Research head", initials: "RK", year: "3rd Year" },
  { name: "Chethana D", role:"Editorial head",initials: "CD", year: "3rd Year" },
  { name: "Chirag S Karle",role:"Social media manager", initials: "CSK", year: "3rd Year" },
  { name: "Mohammed Rihan Wahid",role:"Associate social media manager ", initials: "MRW", year: "3rd Year" },
  { name: "Apoorva H U",role:"Public relation officer", initials: "AHU", year: "3rd Year" },
  { name: "Chaithanya", role:"Associate technical head",initials: "C", year: "3rd Year" },
  { name: "Amrutha J S" ,role:"Human resource", initials: "AJS", year: "3rd Year" },
  
  { name: "Tarun T R", initials: "TR", year: "2nd Year" },
  { name: "M Pratham Gowda", initials: "MPG", year: "2nd Year" },
  { name: "Omair Hamza Abdul Hameed", initials: "OH", year: "2nd Year" },
  { name: "Monish D S", initials: "MD", year: "2nd Year" },
  { name: "Krupa Sinchana C", initials: "KC", year: "2nd Year" },
  { name: "Amrutha H N", initials: "AHN", year: "2nd Year" },
  { name: "S Anagha", initials: "SA", year: "2nd Year" },
  { name: "Thanya Gowda", initials: "TG", year: "2nd Year" },
  { name: "Nireeksha H N", initials: "NH", year: "2nd Year" },
  { name: "Inchara Praveen Shetty", initials: "IPS", year: "2nd Year" },
  { name: "Akanksha", initials: "AK", year: "2nd Year" },
  { name: "Prarthana K M", initials: "PKM", year: "2nd Year" },
  { name: "Sriraksha G Kumar", initials: "SGK", year: "2nd Year" },
];

/* ✅ PHOTO MAP */
const photoMap: Record<string, string> = {
  "Tarun T R": tarunImg,
  "M Pratham Gowda": prathamImg,
  "Omair Hamza Abdul Hameed": omairImg,
  "Monish D S": monishImg,
  "Krupa Sinchana C": krupaImg,
  "Amrutha H N": amruthaHNImg,
  "S Anagha": anaghaImg,
  "Thanya Gowda": thanyaImg,
  "Nireeksha H N": nireekshaImg,
  "Inchara Praveen Shetty": incharaImg,
  "Akanksha": akankshaImg,
  "Prarthana K M": prarthanaImg,
  "Sriraksha G Kumar": srirakshaImg,
  "Mahadesh L M": MahadeshImg,
  "Impana D": ImpanaImg,
  "Manoj S": ManojImg,
  "Sinchana M L": SinchanaImg,
  "Abhishek Gowda B P": AbhishekImg,
  "Ullas G": UllasImg,
  "Janapriya": JanapriyaImg,
  "Ankitha Shetty P": AnkithaImg,
  "Trupthi M": TrupthiImg,
  "Bhuvan": bhuvanImg,
  "Kushal Gowda SP": kushalImg,
  "Amruth R L": amruthImg,
  "Kaphianthailiu Kamson": phianImg,
  "Rahul Kothwal": rahulImg,
  "Amrutha J S": amrutha2Img,
  "Chaithanya": chaithanyaImg,
  "Apoorva H U": ApoorvaImg,
};

const TeamSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const groupedTeam = team.reduce((acc, member) => {
    if (!acc[member.year]) acc[member.year] = [];
    acc[member.year].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  return (
    <section id="team" className="relative py-24 lg:py-32 z-10">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-xs tracking-[0.3em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            The <span className="text-primary glow-text">Crew</span>
          </h2>
        </motion.div>

        <div ref={ref}>
          {Object.keys(groupedTeam).map((year) => {
            const members = groupedTeam[year];

            return (
              <div key={year} className="mb-16">
                <h3 className="text-2xl font-heading text-primary text-center mb-8">
                  {year}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {members.map((member, i) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="card-space p-6 rounded-xl border border-border text-center group"
                    >
                      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 border border-border overflow-hidden">
                        {photoMap[member.name] ? (
                          <img
                            src={photoMap[member.name]}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span className="font-heading text-lg font-bold text-primary">
                            {member.initials}
                          </span>
                        )}
                      </div>

                      <h3 className="font-heading text-sm font-semibold text-foreground">
                        {member.name}
                      </h3>

                      {member.role && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {member.role}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
