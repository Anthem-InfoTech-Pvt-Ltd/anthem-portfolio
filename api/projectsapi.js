import axiosInstance from "../lib/axiosConfig";

export const projectsapi = async () => {
  try {
    const response = await axiosInstance.get(
      "https://managementapinodejs.anthemwork.com/api/website/get-all-publish-projects"
    );
    
    // ✅ Debug - Dekho data kaise aa raha hai
    console.log("Full Response:", response);
    console.log("Response Data:", response.data);
    console.log("Data Type:", typeof response.data);
    console.log("Is Array?", Array.isArray(response.data));
    
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
{/*export const projectsapi = async () => {
  const response = await axiosInstance.get("/api/Portfolio/GetAllProjects");
  return response.data;
};*/}

export const projectbyIdapi = async (projectID) => {
  try {
    const response = await axiosInstance.get(
      `/api/home/ViewProjectByProjectbyid`,
      { params: { projectID } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching project by ID:", error);
    throw error;
  }
};