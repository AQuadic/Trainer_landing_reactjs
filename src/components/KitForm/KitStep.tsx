import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { useMetaStore, type MetaState } from "../../store/useMetaStore";
import { useFormikContext } from "formik";

const KitStep = () => {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext<any>();
  const meta = useMetaStore((state: MetaState) => state.meta);
  const kitSizes = meta?.kit_sizes || [];
  const academyName = meta?.academy.name.en || "Academy";
  const frontUrl = meta?.academy.tshirt_front?.url || "/tshirt.png";
  const backUrl = meta?.academy.tshirt_back?.url || "/tshirt2.png";

  return (
    <section className="max-w-310  mx-auto flex items-start gap-10 max-lg:flex-col">
      <div className="w-full max-lg:mx-auto max-w-163 flex-1">
        <div className="grid w-full items-center gap-4">
          <Label htmlFor="name" className='text-[#FFFFFF] text-base font-bold'>Name on Kit ( Enter Only 9 Characters )</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Name"
            className='h-12 bg-white'
            value={values.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFieldValue("name", e.target.value)
            }
            onBlur={handleBlur}
            maxLength={9}
          />
          {touched.name && errors.name && (
            <div className="text-red-500 text-sm">{errors.name as string}</div>
          )}
        </div>

        <div className="grid w-full items-center gap-4 mt-6">
          <Label htmlFor="number" className='text-[#FFFFFF] text-base font-bold'>Kit Number ( Enter Only 2 Numbers )</Label>
          <Input
            type="number"
            id="number"
            name="number"
            placeholder="Enter Your Number"
            className='h-12 bg-white'
            value={values.number}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              if (val === "" || Number(val) <= 99) setFieldValue("number", val);
            }}
            onBlur={handleBlur}
            min={0}
            max={99}
          />
          {touched.number && errors.number && (
            <div className="text-red-500 text-sm">
              {errors.number as string}
            </div>
          )}
        </div>

        <div className="grid w-full items-center gap-4 mt-6">
          <Label htmlFor="kit_size" className='text-[#FFFFFF] text-base font-bold'>Kit Size</Label>
          <Select
            value={values.kit_size}
            onValueChange={(val) => setFieldValue("kit_size", val)}
          >
            <SelectTrigger className="w-full h-12! bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {kitSizes.map((size: string) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {touched.kit_size && errors.kit_size && (
            <div className="text-red-500 text-sm">
              {errors.kit_size as string}
            </div>
          )}
        </div>

        <div className="grid w-full items-center gap-4 mt-6">
          <Label htmlFor="tshirt_size" className='text-[#FFFFFF] text-base font-bold'>
            {academyName} Out Wear T-shirt Size
          </Label>
          <Select
            value={values.tshirt_size}
            onValueChange={(val) => setFieldValue("tshirt_size", val)}
          >
            <SelectTrigger className="w-full h-12! bg-white">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              {kitSizes.map((size: string) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {touched.tshirt_size && errors.tshirt_size && (
            <div className="text-red-500 text-sm">
              {errors.tshirt_size as string}
            </div>
          )}
        </div>

        <div className="grid w-full items-center gap-4 mt-6">
          <Label htmlFor="hoodie_size" className='text-[#FFFFFF] text-base font-bold'>Hoodie Size</Label>
          <Select
            value={values.hoodie_size}
            onValueChange={(val) => setFieldValue("hoodie_size", val)}
          >
            <SelectTrigger className="w-full h-12! bg-white">
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              {kitSizes.map((size: string) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {touched.hoodie_size && errors.hoodie_size && (
            <div className="text-red-500 text-sm">
              {errors.hoodie_size as string}
            </div>
          )}
        </div>

        <div className="grid w-full items-center gap-4 mt-6">
          <Label htmlFor="received" className='text-[#FFFFFF] text-base font-bold'>Kit to be Received by</Label>
          <Select
            value={values.received ? "true" : "false"}
            onValueChange={(val) => setFieldValue("received", val === "true")}
          >
            <SelectTrigger className="w-full h-12! bg-white">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Received</SelectItem>
              <SelectItem value="false">Not Received</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-8 max-lg:mx-auto">
        <img
          width={258}
          height={311}
          src={frontUrl}
          alt="Tshirt Image"
          className="max-md:w-41 max-md:h-49.25"
        />
        <div className="relative">
          <img
            width={258}
            height={311}
            src={backUrl}
            alt="Tshirt Image"
            className="max-md:w-41 max-md:h-49.25"
          />

          <div className="absolute left-1/2 top-8 md:top-12 transform -translate-x-1/2 pointer-events-none">
            <div className="text-white font-bold text-sm  md:text-2xl drop-shadow-md">
              {values.name || ""}
            </div>
          </div>

          <div className="absolute left-1/2  top-16 md:top-24 transform -translate-x-1/2 pointer-events-none">
            <div className="text-white font-extrabold text-2xl md:text-4xl drop-shadow-md">
              {values.number || ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitStep;
