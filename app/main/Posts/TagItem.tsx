const TagItem: React.FC<{ value: string }> = ({ value }) => {
  return (
    <li className="inline-block p-1 mr-1 text-sm">
      #{value}
    </li>
  )
}

export default TagItem;