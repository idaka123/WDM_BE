module.exports = (dependencies) => {
    const {
      useCases: {
        lob: { deleteLob },
      },
    } = dependencies
  
    return async (req, res) => {
      try {
        const { id } = req.body
  
        const result = await deleteLob(dependencies).execute({
          id
        })
  
        if (result?.data) {
          return res.status(200).json({ data: result?.data })
        } else if (result?.error) {
          return res.status(500).json({ error: result?.error })
        }
      } catch (error) {
        return res.status(500).json({ error: error })
      }
    }
  }
  