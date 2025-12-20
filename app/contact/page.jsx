"use client";

import { useActionState, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "./contactAction";
import { contactInfo } from "@/config/configurations";
import SciFiSnackbar from "@/components/ui/sci-fi-snackbar";
import { FaPaperclip, FaFileAlt } from "react-icons/fa";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

const Contact = () => {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  
  const [fileName, setFileName] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    if (state?.message) {
      setShowSnackbar(true);
      // Clear file name on success
      if (state.success) {
        setFileName("");
      }
    }
  }, [state]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: The "Cyber" Form */}
          <div className="lg:w-2/3 order-2 lg:order-none relative group">
             {/* Decorative Background Glow */}
             <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             
            <form
              action={formAction}
              className="relative flex flex-col gap-6 p-8 md:p-12 bg-[#1c1c22] rounded-xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Pseudo-Tech Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent/20 rounded-tl-xl pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent/20 rounded-br-xl pointer-events-none"></div>

              <div className="flex flex-col gap-2 mb-4">
                 <h3 className="text-4xl text-accent font-mono tracking-tighter">
                  <span className="text-white">./</span>Contact_Protocol
                 </h3>
                 <p className="text-white/50 text-sm font-mono uppercase tracking-widest pl-1 border-l-2 border-accent/50">
                    Secure Channel Established
                 </p>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    required
                    className="bg-primary/50 border-white/10 focus:border-accent transition-colors h-[50px] pl-4"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent/50 rounded-full"></div>
                </div>
                <div className="relative">
                   <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    required
                    className="bg-primary/50 border-white/10 focus:border-accent transition-colors h-[50px] pl-4"
                  />
                </div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email.Address"
                  required
                  className="bg-primary/50 border-white/10 focus:border-accent transition-colors h-[50px] md:col-span-2"
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company [Optional]"
                  className="bg-primary/50 border-white/10 focus:border-accent transition-colors h-[50px] md:col-span-2"
                />
              </div>

              {/* Purpose */}
              <Textarea
                className="h-[180px] bg-primary/50 border-white/10 focus:border-accent resize-none p-4"
                placeholder="Initialize message sequence... (Max 1200 chars)"
                name="purpose"
                maxLength={1200}
                required
              />

              {/* Job Description (Toggle) */}
              <div className="flex flex-col gap-4 p-4 bg-primary/30 rounded-lg border border-dashed border-white/10">
                <div className="flex items-center justify-between">
                     <label className="text-white/80 font-mono text-sm">
                  &gt; Add_Job_Description
                    </label>
                    {fileName && (
                          <span className="text-xs text-accent font-mono border border-accent/30 px-2 py-1 rounded bg-accent/10 flex items-center gap-2">
                             <FaFileAlt /> {fileName}
                          </span>
                    )}
                </div>
               
                <Tabs defaultValue="manual" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-black/50 p-1 rounded-lg mb-4">
                    <TabsTrigger value="manual" className="data-[state=active]:bg-accent data-[state=active]:text-primary font-mono text-xs uppercase">Manual Entry</TabsTrigger>
                    <TabsTrigger value="upload" className="data-[state=active]:bg-accent data-[state=active]:text-primary font-mono text-xs uppercase">Upload File</TabsTrigger>
                  </TabsList>

                  <TabsContent value="manual" className="min-h-0 mt-0">
                    <Textarea
                      placeholder="Paste job data here..."
                      name="jobDescriptionManual"
                      className="h-[120px] bg-black/20 border-white/5 text-sm"
                    />
                  </TabsContent>
                  <TabsContent value="upload" className="min-h-0 mt-0">
                    <div className="flex items-center justify-center w-full relative">
                      <label
                        htmlFor="dropzone-file"
                        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-all duration-300
                            ${fileName ? 'border-accent bg-accent/5' : 'border-white/20 hover:bg-white/5 hover:border-accent/50'}
                        `}
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
                            {fileName ? (
                                <>
                                  <FaCheckCircle className="text-3xl text-accent mb-2" />
                                  <p className="mb-1 text-sm text-accent font-semibold">{fileName}</p>
                                  <p className="text-xs text-white/50">Click to replace</p>
                                </>
                            ): (
                                <>
                                    <FaPaperclip className="text-2xl text-white/40 mb-2" />
                                    <p className="mb-2 text-sm text-gray-400">
                                        <span className="font-semibold text-accent">Click to upload</span> or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 font-mono">
                                        PDF, DOC (MAX. 5MB)
                                    </p>
                                </>
                            )}
                        </div>
                        <input
                          id="dropzone-file"
                          name="jobDescriptionFile"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.txt"
                        />
                      </label>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="flex justify-end pt-4 border-t border-white/5">
                  <Button
                    type="submit"
                    disabled={isPending}
                    size="lg"
                    className={`
                        relative font-bold uppercase tracking-widest text-sm h-14 px-10 transition-all duration-300
                        ${isPending ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-70' : 'bg-accent text-primary hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]'}
                    `}
                  >
                    {isPending ? (
                        <span className="flex items-center gap-2">
                             <span className="animate-spin h-4 w-4 border-2 border-transparent border-t-white rounded-full block"></span>
                             Transmitting...
                        </span>
                    ) : (
                        "Exe.Submit()"
                    )}
                     
                     {/* Tech corner for button */}
                     {!isPending && <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/50"></span>}
                     {!isPending && <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/50"></span>}
                  </Button>
              </div>
            </form>
          </div>

          {/* Right Side: Info Panel (Redesigned) */}
          <div className="lg:w-1/3 order-1 lg:order-none flex flex-col gap-8 lg:mt-10">
              <div className="bg-[#1c1c22] p-8 rounded-xl border border-white/5 shadow-lg lg:sticky lg:top-24">
                  <h4 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                      Direct_Comms
                  </h4>
                   <ul className="flex flex-col gap-8">
                      {contactInfo.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group">
                          <div className="w-[50px] h-[50px] bg-[#232329] text-accent rounded-lg flex items-center justify-center text-[22px] group-hover:bg-accent group-hover:text-primary transition-all duration-300 shrink-0">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-white/40 text-xs font-mono uppercase mb-1">{item.title}</p>
                            <h3 className="text-white text-base font-medium break-all">{item.description}</h3>
                          </div>
                        </li>
                      ))}
                    </ul>
                  
                  {/* Decorative Elements */}
                  <div className="mt-12 opacity-30">
                      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                      <div className="flex justify-between text-[10px] font-mono mt-2 text-accent">
                          <span>SYS: ONLINE</span>
                          <span>LAT: 19.0760</span>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
      
      {/* Sci-Fi Snackbar Notification */}
      <AnimatePresence>
          {showSnackbar && (
              <SciFiSnackbar 
                message={state.message} 
                type={state.success ? 'success' : 'error'} 
                onClose={() => setShowSnackbar(false)} 
              />
          )}
      </AnimatePresence>

    </motion.section>
  );
};
import { FaCheckCircle } from "react-icons/fa"; // Double check imports

export default Contact;
