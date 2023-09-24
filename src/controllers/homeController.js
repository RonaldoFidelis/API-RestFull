function get(req,res){
  return res.status(200).json({ message: 'ok' })
}

export const modules = {
  get,
}
