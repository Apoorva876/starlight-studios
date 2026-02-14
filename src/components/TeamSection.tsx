import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import tarunImg from "@/assets/alumni/tarun.jpg";
// import prathamImg from "@/assets/1st years/pratham.png";
// import omairImg from "@/assets/1st years/omair.png";
// import monishImg from "@/assets/1st years/monish.png";
// import krupaImg from "@/assets/1st years/krupa.png";
// import amruthaHNImg from "@/assets/1st years/amrutha.png";
// import anaghaImg from "@/assets/1st years/anagha.png";
// import thanyaImg from "@/assets/1st years/thanya.png";
// import nireekshaImg from "@/assets/1st years/nireeksha.png";
// import incharaImg from "@/assets/1st years/inchara.png";
// import akankshaImg from "@/assets/1st years/akanksha.png";
// import prarthanaImg from "@/assets/1st years/prarthana.png";
// import srirakshaImg from "@/assets/1st years/sriraksha.png";

interface TeamMember {
  name: string;
  role?: string;
  initials: string;
  year: string;
}

/* ✅ TEAM DATA */
const team: TeamMember[] = [
  { name: "Mahadesh L M", role: "President", initials: "ML", year: "4th Year" },
  { name: "Impana D", role: "General Secretary", initials: "ID", year: "4th Year" },
  { name: "Manoj S", role: "Vice President", initials: "MS", year: "4th Year" },
  { name: "Sinchana M L", role: "Joint Secretary", initials: "SM", year: "4th Year" },
  { name: "Abhishek Gowda B P", role: "Event Director", initials: "AG", year: "4th Year" },
  { name: "Ullas G", role: "Treasurer", initials: "UG", year: "4th Year" },
  { name: "Mohammed Haris", role: "Sponsorship Head", initials: "MH", year: "4th Year" },
  { name: "Janapriya", role: "Promotional Head", initials: "J", year: "4th Year" },
  { name: "Ankitha Shetty P", role: "Creative Head", initials: "AS", year: "4th Year" },
  { name: "Trupthi M", role: "Event Coordinator & Inventory Manager", initials: "TM", year: "4th Year" },
  { name: "Dhanyashree P", role: "Research Head", initials: "DP", year: "4th Year" },
  { name: "Prakyath Bidappa C K", role: "Social Media Manager", initials: "PB", year: "4th Year" },

  { name: "Poorab", role: "Co-Treasurer", initials: "P", year: "3rd Year" },
  { name: "Bhuvan", role: "Technical Head", initials: "B", year: "3rd Year" },
  { name: "Ullas Gowda J S", role: "Associate Technical Head", initials: "UG", year: "3rd Year" },
  { name: "Sinchana Prakash", role: "Associate Creative Head", initials: "SP", year: "3rd Year" },
  { name: "Sharanya S", role: "Associate Promotional Head", initials: "SS", year: "3rd Year" },
  { name: "Niranjan K", role: "Public Relations Officer (PRO)", initials: "NK", year: "3rd Year" },
  { name: "Yashwanth", role: "Human Resource Manager", initials: "Y", year: "3rd Year" },

  { name: "Kushal Gowda SP", initials: "KG", year: "2nd Year" },
  { name: "Amruth R L", initials: "AR", year: "2nd Year" },
  { name: "Ghanavi M S", initials: "GM", year: "2nd Year" },
  { name: "Rahul Kothwal", initials: "RK", year: "2nd Year" },
  { name: "Chethana D", initials: "CD", year: "2nd Year" },
  { name: "Chirag S Karle", initials: "CSK", year: "2nd Year" },
  { name: "Mohammed Rihan Wahid", initials: "MRW", year: "2nd Year" },
  { name: "Apoorva H U", initials: "AHU", year: "2nd Year" },
  { name: "Chaithanya", initials: "C", year: "2nd Year" },
  { name: "Amrutha J S", initials: "AJS", year: "2nd Year" },
  { name: "Kaphianthailiu Kamson", initials: "KK", year: "2nd Year" },

  { name: "Tarun T R", initials: "TR", year: "1st Year" },
  { name: "M Pratham Gowda", initials: "MPG", year: "1st Year" },
  { name: "Omair Hamza Abdul Hameed", initials: "OH", year: "1st Year" },
  { name: "Monish D S", initials: "MD", year: "1st Year" },
  { name: "Krupa Sinchana C", initials: "KC", year: "1st Year" },
  { name: "Amrutha H N", initials: "AHN", year: "1st Year" },
  { name: "S Anagha", initials: "SA", year: "1st Year" },
  { name: "Thanya Gowda", initials: "TG", year: "1st Year" },
  { name: "Nireeksha H N", initials: "NH", year: "1st Year" },
  { name: "Inchara Praveen Shetty", initials: "IPS", year: "1st Year" },
  { name: "Akanksha", initials: "AK", year: "1st Year" },
  { name: "Prarthana K M", initials: "PKM", year: "1st Year" },
  { name: "Sriraksha G Kumar", initials: "SGK", year: "1st Year" },
];

/* ✅ PHOTO MAP */
const photoMap: Record<string, string> = {
  "Tarun T R": tarunImg,
  // "M Pratham Gowda": prathamImg,
  // "Omair Hamza Abdul Hameed": omairImg,
  // "Monish D S": monishImg,
  // "Krupa Sinchana C": krupaImg,
  // "Amrutha H N": amruthaHNImg,
  // "S Anagha": anaghaImg,
  // "Thanya Gowda": thanyaImg,
  // "Nireeksha H N": nireekshaImg,
  // "Inchara Praveen Shetty": incharaImg,
  // "Akanksha": akankshaImg,
  // "Prarthana K M": prarthanaImg,
  // "Sriraksha G Kumar": srirakshaImg,
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
