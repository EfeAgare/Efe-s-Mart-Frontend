import axios from 'axios';
// import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

class productsService {
  constructor() {
    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  };

  getAllProducts = async ({ page, limit, description_length }) => {
    try {
      const { data } = await axios.get(
        systemConfig.serverBaseUrl + '/products',
        {
          params: {
            page,
            limit,
            description_length,
          },
        }
      );
      return data;
    } catch (error) {
      throw error.response;
    }
  };

  searchProducts = async ({
    query_string,
    all_words,
    page,
    limit,
    description_length,
  }) => {
    try {
      const { data } = axios.get(
        systemConfig.serverBaseUrl + '/products/search',
        {
          params: {
            query_string,
            all_words,
            page,
            limit,
            description_length,
          },
        }
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  getProductsInCategory = async ({ category_id }) => {
    try {
      const { data } = axios.get(
        systemConfig.serverBaseUrl + `/products/inCategory/${category_id}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  getProductsInDepartment = ({ department_id }) => {
    try {
      const { data } = axios.get(
        systemConfig.serverBaseUrl + `/products/inDepartment/${department_id}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  /* ---------------------------------------------- */
  /* The Following Methods are for a single product */
  /* ---------------------------------------------- */

  getProductById = async ({ product_id }) => {
    try {
      const { data } = await axios.get(systemConfig.serverBaseUrl + `/products/${product_id}`);
      return data;
    } catch (error) {
      throw error;
    }
  };

  getProductDetails = async ({ product_id }) => {
    try {
      const { data } = await axios.get(
        systemConfig.serverBaseUrl + `/products/${product_id}/details`
      );

      return data;
    } catch (error) {
      throw error;
    }
  };

  getProductLocations = async ({ product_id }) => {
    try {
      const { data } = await axios.get(
        systemConfig.serverBaseUrl + `/products/${product_id}/locations`
      );
        return data
    } catch (error) {
      throw error;
    }
  };

  getProductReviews = async ({ product_id }) => {
    try {
      const { data } = await axios.get(
        systemConfig.serverBaseUrl + `/products/${product_id}/reviews`
      );
        return data
    } catch (error) {
      throw error.response;
    }
  };

  createProductReview = async ({ product_id, review, rating }) => {
    try {
      const { data } = await axios.post(
        systemConfig.serverBaseUrl + `/products/${product_id}/reviews`,
        {
          review,
          rating,
        }
      );

      return data;
    } catch (error) {
      throw error.response;
    }
  };
}

const instance = new productsService();

export default instance;
