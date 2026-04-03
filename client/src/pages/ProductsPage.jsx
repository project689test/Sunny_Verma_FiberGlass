import WeManufacture from '../components/WeManufacture';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <>
      <section className="bg-white py-12 md:py-20 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 md:mt-0"
        >
          <span className="sec-label justify-center">WHAT WE BUILD</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-2">
            OUR <span className="text-fire">PRODUCTS</span>
          </h1>
        </motion.div>
      </section>
      <div className="-mt-10">
         <WeManufacture />
      </div>
    </>
  );
};
export default ProductsPage;
