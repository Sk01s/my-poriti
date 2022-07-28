import Landing from "../components/Landing";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.main exit={{ y: -1000 }}>
      <div className="overflow-hidden">
        <Landing />
      </div>
      <Loading />
    </motion.main>
  );
};
export default Home;
