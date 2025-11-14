import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const Products = () => {
  return (
    <Card className="h-[600px] ">
      <CardContent>
        <div className="flex text-lg font-semibold justify-between items-center">
          <div className="headerFont">Latest Launches</div>
        </div>
        <div className="grid grid-cols-1 grid-col-2">
          <div className="rounded-sm h-[250px] flex justify-center items-center mt-4 bg-[url('https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover relative ">
            <Badge variant="secondary" className="absolute left-4 bottom-4">
              Postilo
            </Badge>
          </div>
          <div className="rounded-sm flex justify-center items-center bg-[url('https://images.pexels.com/photos/3862599/pexels-photo-3862599.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover h-[250px] mt-4 relative ">
            <Badge variant="secondary" className="absolute left-4 bottom-4">
              CV Space
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;
