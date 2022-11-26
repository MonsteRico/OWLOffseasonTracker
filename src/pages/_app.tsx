import { type AppType } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "../utils/trpc";
import { useRouter } from "next/router";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
        animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
        exit={{ opacity: 0, clipPath: "inset(50% 50% 50% 50%)" }}
        transition={{ duration: 0.25 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default trpc.withTRPC(MyApp);
