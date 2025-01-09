import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

  import { Slash } from "lucide-react"

  interface RoutingPreviewProps {
    path: string;
  }

const RoutingPreview: React.FC<RoutingPreviewProps> = ({
  path
}) => {
    return (
        <div
        className="
          absolute 
          top-6 left-6 
          flex items-center space-x-4 
          bg-black/50 
          p-2 
          rounded-md 
          backdrop-blur-sm
        "
      >
      <Breadcrumb>
        <BreadcrumbList className="text-white text-lg">
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="hover:text-orange-400">home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
      <Slash />
    </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink className="hover:text-off-white">{path}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      </div>
    )
  }
  
export default RoutingPreview;