import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const alumniData = [
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
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-heading text-lg font-bold">
                        {name.charAt(0)}
                      </span>
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
