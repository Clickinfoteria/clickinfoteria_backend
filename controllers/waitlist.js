const Waiter = require('../models/waitlist')

exports.createWaiter = async (req, res) =>{
    const { email} = req.body

    const alreadyExists = await Waiter.findOne({ email })

    if (alreadyExists) return res.status(401).json({ error: 'Waiter already exists!' })

    const newWaiter = new Post({ email });

    await newWaiter.save();

    res.json({ waiter: { 
        id: newWaiter._id,
          email,
    }
       
         });

}

exports.deleteWaiter = async (req, res) => {
    const {waiterId} = req.params

    if(!isvalidObjectId(waiterId))
    return res.status(401).json({ error: 'Invalid request!'})
    const waiter = await Waiter.findById(waiterId)
    if(!waiter) 
    return res.status(401).json({ error: 'Waiter not Found!'})

    await Waiter.findByIdAndDelete(waiterId)
    res.json({message: 'Waiter removed successfully!'})


}

exports.getWaiters =  async (req, res) =>{
    const {pageNo = 0, limit = 10} = req.query;
    const waiters = await Waiter.find({})
    .sort({createdAt: -1})
    .skip(parseInt(pageNo) * parseInt(limit) )
    .limit(parseInt(limit));

    const waiterCount = await Waiter.countDocuments()
    res.json({waiters: waiters.map((waiter) => ({
              
      id: waiter._id,
       name: waiter.name,
       email: waiter.email,
       
        
       
  })),  

 waiterCount,
  })
  
  }