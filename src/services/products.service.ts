import axios from "axios";

const BASE_URL = process.env.API_URL;

export const productsService = {
    getAllProducts: async () => {
        let serviceResponse: any = null;

        try {
            const res = await axios.get(
                `${BASE_URL}/products`,
                {
                    timeout: 10000,
                }
            );

            if (res.data) {
                serviceResponse = res.data;
            }
        } catch (error) {
            return null;
        }

        return serviceResponse;
    },
    getProductById: async (productId: string) => {
        let serviceResponse: any = null;

        try {
            const res = await axios.get(
                `${BASE_URL}/products/${productId}`,
                {
                    timeout: 10000,
                }
            );

            if (res.data) {
                serviceResponse = res.data;
            }
        } catch (error) {
            return null;
        }

        return serviceResponse;
    }
}