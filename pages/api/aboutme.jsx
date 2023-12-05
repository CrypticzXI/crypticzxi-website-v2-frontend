import AboutMeData from '../../API_Data/Profile.json';

export default async (req, res) => {
    res.status(200).json(AboutMeData)
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

  