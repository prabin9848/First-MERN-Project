import ratelimit from "../config/upstash";

const rateLimiter = async (requestAnimationFrame, resizeBy, next)=>{
    try{
        const{success} = await ratelimit.limit("my-limit-key")

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, please tru again later",
            });
        }
        
    } catch(error){
        console.log("Rate limit error", error);
        next(error);
    }
}

export default rateLimiter;