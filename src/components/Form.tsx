import { SyntheticEvent, useState } from "react";
import { FormState } from "../types";
import { FC } from "react";
import { BeatLoader } from "react-spinners";

type Props = {
  submit: (formData: FormState) => void;
  loading: boolean;
};

const initState: FormState = {
  title: "",
  description: "",
};

const Form: FC<Props> = ({ submit, loading }) => {
  const [formData, setFormData] = useState<FormState>(initState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill in all fields");
      return;
    }
    await submit(formData);
    setFormData(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          value={formData.title}
          type="text"
          name="title"
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Description
        <input
          type="text"
          name="description"
          value={formData.description}
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">
        {loading ? <BeatLoader loading={loading} size={12} /> : "Add todo"}
      </button>
    </form>
  );
};

export default Form;
