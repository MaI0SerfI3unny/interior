import safeApi from "../../api/safeApi";

export const waitForPhoto = async (taskId, retries = 30, delay = 3000) => {
  for (let i = 0; i < retries; i++) {
    const response = await safeApi.get(
      `/ai-interior-gen/status?task_id=${taskId}&ts=${Date.now()}`
    );
    const data = response.data;

    if (data.status === "succeeded") {
      return data;
    }

    await new Promise(resolve => setTimeout(resolve, delay));
  }

  throw new Error("Timed out waiting for image generation.");
};
