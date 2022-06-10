const Subscriber = require('../models/subscriber')

exports.createSubscriber = async (req, res) =>{
    const {name, email} = req.body

    const alreadyExists = await Post.findOne({ email })

    if (alreadyExists) return res.status(401).json({ error: 'Subscriber already exists!' })

    const newSubscriber = new Post({ name, email });

    await newSubscriber.save();

    res.json({ subscriber: { 
        id: newSubscriber._id,
         name,
          email,
    }
       
         });

}

exports.deleteSubscriber = async (req, res) => {
    const {subscriberId} = req.params

    if(!isvalidObjectId(subscriberId))
    return res.status(401).json({ error: 'Invalid request!'})
    const subscriber = await Subscriber.findById(subscriberId)
    if(!subscriber) 
    return res.status(401).json({ error: 'Subscriber not Found!'})

    await Subscriber.findByIdAndDelete(subscriberId)
    res.json({message: 'Subscriber removed successfully!'})


}

exports.getSubscribers =  async (req, res) =>{
    const {pageNo = 0, limit = 10} = req.query;
    const subscribers = await Subscriber.find({})
    .sort({createdAt: -1})
    .skip(parseInt(pageNo) * parseInt(limit) )
    .limit(parseInt(limit));

    const subscriberCount = await Subscriber.countDocuments()
    res.json({subscribers: subscribers.map((subscriber) => ({
              
      id: subscriber._id,
       name: subscriber.name,
       email: subscriber.email,
       
        
       
  })),  

  subscriberCount,
  })
  
  }