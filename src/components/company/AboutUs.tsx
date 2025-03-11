
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-2xl font-bold mb-6">About Us</h1>
      
      <div className="prose max-w-none">
        <p>
          We are a leading recruitment technology company that helps businesses find and hire the best talent efficiently.
          Founded in 2018, our platform combines cutting-edge artificial intelligence with human expertise to transform 
          the hiring process.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to make recruitment more efficient, effective, and equitable. We believe that the right match between
          talent and opportunity creates value for individuals, organizations, and society as a whole.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Our Team</h2>
        <p>
          Our team consists of experts in recruitment, technology, data science, and customer success. We're passionate about
          solving complex problems and delivering exceptional results for our clients.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Leadership</h3>
            <p className="text-muted-foreground">
              Our leadership team brings decades of combined experience in recruitment, technology, and business operations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Technology</h3>
            <p className="text-muted-foreground">
              Our engineering team builds scalable, secure, and innovative solutions that power modern recruitment.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Customer Success</h3>
            <p className="text-muted-foreground">
              Our customer success team ensures that every client achieves their recruitment goals with our platform.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
