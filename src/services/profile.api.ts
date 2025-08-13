
import { IApiResponse } from '@src/models/api';
import { IUser } from '@src/models/user';
import API_ENDPOINTS from '.';
import api from '@src/utils/axios';
import { useQuery } from '@tanstack/react-query';
import ReactQueryKeys from '@src/constants/reactQueryKeys';



const getProfile = async () => {
  return await api.get<IApiResponse>(API_ENDPOINTS.user.profile);
};

const useGetProfile = () => {
  return useQuery<IApiResponse<IUser>>({
    queryKey: [ReactQueryKeys.getProfileInfo],
    queryFn: async () => {
      const response = await getProfile();
      return response.data;
    },
  });
};





const updateProfile = async (data: IUser) => {
  return await api.put<IApiResponse>(API_ENDPOINTS.user.profile, data);
};



export default {
  getProfile,
  useGetProfile,

  updateProfile,
};
