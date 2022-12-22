import Avatar from "~/components/Avatar";

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:block w-1/4 h-screen sticky top-0 pt-4">
      <div className="aspect-square">
        <Avatar />
      </div>
    </div>
  )
}

export default Sidebar;