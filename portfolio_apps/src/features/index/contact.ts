export const sendContactForm = async (data: { name: string; contact: string; message: string }) => {
    try {
      const response = await fetch('https://e2gwnx4pad.execute-api.ap-northeast-1.amazonaws.com/prod/portfolioSendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Success:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };