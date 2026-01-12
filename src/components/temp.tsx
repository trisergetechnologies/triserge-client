<form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                            Location (City, State) *
                          </label>
                          <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                            LinkedIn Profile
                            <span className="text-gray-500 ml-1">(Optional but recommended)</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiLinkedin className="text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="linkedin"
                              name="linkedin"
                              value={formData.linkedin}
                              onChange={handleInputChange}
                              placeholder="https://linkedin.com/in/your-profile"
                              className="w-full bg-white border border-gray-300 rounded-lg pl-10 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                            Portfolio/Website
                            <span className="text-gray-500 ml-1"></span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <FiLink className="text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="portfolio"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleInputChange}
                              placeholder="https://yourportfolio.com"
                              className="w-full bg-white border border-gray-300 rounded-lg pl-10 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                          Resume *
                        </label>
                        <div className="flex items-center gap-4">
                          <label className="cursor-pointer flex-1">
                            <div className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
                              <FiUpload />
                              {formData.resume ? formData.resume.name : 'Choose File'}
                            </div>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              onChange={handleFileChange}
                              required
                              className="hidden"
                              accept=".pdf,.doc,.docx"
                            />
                          </label>
                          {formData.resume && (
                            <span className="text-sm text-gray-600 flex items-center gap-1">
                              <FiCheck className="text-green-500" />
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </div>

                      <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
                          Cover Letter
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us why you're a great fit for this role..."
                        ></textarea>
                      </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <button
                        type="submit"
                        disabled={submissionState === 'submitting'}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 disabled:opacity-70"
                      >
                        {submissionState === 'submitting' ? (
                          'Submitting...'
                        ) : (
                          <>
                            <FiSend />
                            Submit Application
                          </>
                        )}
                      </button>
                    </div>
                  </form>