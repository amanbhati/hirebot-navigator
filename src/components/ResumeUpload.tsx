
import { useState } from 'react';
import { Upload, Check, X, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useInView } from '@/lib/animations';

const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check if file is PDF or DOCX
      const fileType = selectedFile.type;
      if (
        fileType === 'application/pdf' || 
        fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ) {
        setFile(selectedFile);
      } else {
        toast.error('Please upload a PDF or DOCX file');
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    setUploading(true);

    // Simulate upload with a timeout
    setTimeout(() => {
      setUploading(false);
      setUploadSuccess(true);
      toast.success('Resume uploaded successfully');
    }, 2000);
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-xl border border-border p-6 md:p-8 shadow-sm"
    >
      <h3 className="text-xl font-bold mb-4">Upload Your Resume</h3>
      <p className="text-muted-foreground mb-6">
        Please upload your resume in PDF or DOCX format. Maximum file size: 5MB.
      </p>

      <div className="mb-6">
        <div className={`border-2 border-dashed rounded-lg p-8 text-center ${file ? 'border-primary/50 bg-primary/5' : 'border-border'}`}>
          {file ? (
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Check className="text-primary" size={20} />
              </div>
              <p className="font-medium mb-1">{file.name}</p>
              <p className="text-sm text-muted-foreground mb-4">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <button 
                onClick={() => setFile(null)}
                className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1"
              >
                <X size={16} /> Remove file
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Upload className="text-primary" size={20} />
              </div>
              <p className="font-medium mb-2">Drag and drop your resume here</p>
              <p className="text-sm text-muted-foreground mb-4">or click to browse files</p>
              <label className="px-4 py-2 bg-primary/10 text-primary rounded-md cursor-pointer hover:bg-primary/20 transition-colors">
                Browse Files
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          disabled={!file || uploading || uploadSuccess}
          className={`px-6 py-2 rounded-md flex items-center gap-2 ${
            uploadSuccess 
              ? 'bg-green-500 text-white' 
              : 'bg-primary text-white hover:bg-primary/90'
          } disabled:opacity-50 disabled:cursor-not-allowed transition-colors`}
        >
          {uploading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Uploading...
            </>
          ) : uploadSuccess ? (
            <>
              <Check size={18} />
              Uploaded
            </>
          ) : (
            <>
              <Upload size={18} />
              Upload Resume
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
};

export default ResumeUpload;
